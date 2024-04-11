import { fetchClient } from "@/lib/api";
import { SimpleTable } from "@/components/own/table";
import { cookies } from "next/headers";

export default async function DemoPage() {
  const cookiesStore = cookies();
  const apiClient = fetchClient({
    headers: {
      authorization: `Bearer ${cookiesStore.get("session")}`,
    },
  });

  const data = await apiClient.get("cats").then((res) => res.json());

  return (
    <div className="container mx-auto py-10">
      <SimpleTable dataList={data.data} />
    </div>
  );
}
