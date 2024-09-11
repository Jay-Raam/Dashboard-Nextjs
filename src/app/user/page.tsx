import fetchValue from "@/components/fecth";

type Param = {
  id: number;
  url: string;
  title: string;
  body: string;
};

export default async function FetchData() {
  const data = await fetchValue();

  return (
    <>
      <div className="user flex justify-center items-center gap-5 flex-col">
        <div className="container mx-auto my-0 flex flex-wrap max-w-[1550px]">
          {data.map((item: Param) => (
            <div
              key={item.id}
              className="flex mx-auto my-0 flex-col w-[300px] gap-4 border rounded-sm p-5 mt-1 mb-1"
            >
              <h1 className="mt-2 mb-2"> User name : {item.title}</h1>
              <p>User description : {item.body}</p>
            </div>
          ))}
        </div>
        {data && data.length >= 5 && (
          <div className="mx-auto my-0 mt-3 mb-3 text-center">
            <p className="text-center text-[15px]">
              This data provide by jsonplaceholder
            </p>
          </div>
        )}
      </div>
    </>
  );
}
