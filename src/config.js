const checkConfig = (server) => {
  let config = {};

  switch (server) {
    case "production":
      config = { baseUrl: "https://supergearyt.vercel.app" };
      break;

    case "local":
      config = { baseUrl: "http://localhost:8000/api" }; // ✅ تأكد من /api هنا
      break;

    default:
      console.warn("⚠️ Unknown server type, defaulting to local");
      config = { baseUrl: "http://localhost:8000/api" };
      break;
  }

  return config;
};

export const selectServer = "local";
export const config = checkConfig(selectServer);
