
(function () {
  const url = window.TLM_SUPABASE_URL;
  const key = window.TLM_SUPABASE_ANON_KEY;

  const cfgReady =
    typeof url === "string" &&
    url.startsWith("https://") &&
    !url.includes("YOUR-PROJECT") &&
    typeof key === "string" &&
    key.length > 0 &&
    !key.includes("YOUR_") &&
    !key.includes("REPLACE_WITH");

  window.tlmSupabase = null;

  if (cfgReady && window.supabase &&
      typeof window.supabase.createClient === "function") {
    try {
      window.tlmSupabase = window.supabase.createClient(url, key);
    } catch (error) {
      console.error("TLM Supabase initialization failed:", error);
    }
  } else {
    console.error("TLM Supabase is not configured. Check supabase-config.js and the Supabase CDN script.");
  }

  const menu = document.querySelector(".menu");
  const nav = document.querySelector("nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      if (!nav) return;
      nav.classList.toggle("mobile-open");
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
      });
    });
  }

  async function refreshAccountLink() {
    const link = document.getElementById("accountLink");
    if (!link) return;

    if (!window.tlmSupabase) {
      link.textContent = "LOGIN";
      link.href = "login.html";
      return;
    }

    try {
      const { data, error } = await window.tlmSupabase.auth.getUser();

      if (error) throw error;

      const user = data.user;

      link.textContent = user ? "ACCOUNT" : "LOGIN";
      link.href = user ? "profile.html" : "login.html";
    } catch (error) {
      console.error("TLM account check failed:", error);
      link.textContent = "LOGIN";
      link.href = "login.html";
    }
  }

  refreshAccountLink();

  window.tlmRequireConfig = function () {
    if (window.tlmSupabase) return true;

    alert(
      "Supabase is not configured. Check supabase-config.js, your project URL, publishable key, and script loading."
    );

    return false;
  };
})();
