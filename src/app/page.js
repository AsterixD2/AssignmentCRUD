import Image from "next/image";
import { FormCreate } from "./_components/form-create";
import { DataList } from "./_components/data-list";

export default function Page() {
  return (
    <div className="max-w-3xl m-auto py-12 space-y-8">
      <Div className="font-semibold tracking-tight">Kemana Uangku?</Div>
      <FormCreate />
      <DataList />
    </div>
  );
}
