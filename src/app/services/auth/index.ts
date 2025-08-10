"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { revalidatePath } from "next/cache";

export const registerStudent = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `https://job-placement-server-cyan.vercel.app/api/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `https://job-placement-server-cyan.vercel.app/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        next: {
          tags: ["user"],
        },

        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();
    console.log(result);

    if (result.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;
  console.log("accessToken :", accessToken);
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    revalidatePath("/");
    return decodedData;
  } else {
    return null;
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
