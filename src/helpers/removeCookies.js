import Cookies from "js-cookie";

export function deleteAllCookies() {
  // Get all cookies
  const cookies = Cookies.get();

  // Iterate over each cookie and remove it
  for (const cookie in cookies) {
    if (cookie !== "productivity-token" && cookie !== "productivity-demo") {
      Cookies.remove(cookie);
    }
  }
}

// Call the function to delete all cookies
deleteAllCookies();
