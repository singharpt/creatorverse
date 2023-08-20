export const encoder = (data) => {
  const base64 = btoa(data);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

// URL-safe base64 decoding
export const decoder = (urlSafeData) => {
  const base64 = urlSafeData.replace(/-/g, "+").replace(/_/g, "/");
  const paddedData = base64 + "=".repeat((4 - (base64.length % 4)) % 4); // Pad with '='
  return atob(paddedData);
};
