export async function register(email: string, password: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/client/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      return { success: false, message: "Failed to register" };
    }

    return { success: true, message: "Successfully registered" };
  } catch (error) {
    return { success: false, message: "Failed to register" };
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/client/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      return { success: false, message: "Failed to login" };
    }

    return { success: true, message: "Successfully logged in" };
  } catch (error) {
    return { success: false, message: "Failed to login" };
  }
}

export async function emailVerify(email: string, emailVerificationNumber: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/client/verify-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, emailVerificationNumber }),
      }
    );

    if (!response.ok) {
      return { success: false, message: "Failed to verify email" };
    }

    return { success: true, message: "Email verified" };
  } catch (error) {
    return { success: false, message: "Failed to verify email" };
  }
}
