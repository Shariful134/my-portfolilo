/* eslint-disable @typescript-eslint/no-explicit-any */
//create and update info
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const updateInfo = async (id: string, userData: any) => {
  const token = (await cookies()).get("accessToken")!.value;
  try {
    const res = await fetch(
      `https://job-placement-server-cyan.vercel.app/api/v1/info/create-info/${id}`,

      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();
    revalidateTag("INFO");
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

//get All Info
export const getAllInfo = async (id: string) => {
  try {
    const res = await fetch(
      `https://job-placement-server-cyan.vercel.app/api/v1/info/create-info/${id}`,
      {
        next: {
          tags: ["INFO"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
