export default async function Page() {
  const env = process.env.NEXT_PUBLIC_TEST_VAR;
  return (
    <div className="flex w-full justify-center flex-col items-center">
      <h1 className="text-5xl mb-8">Test Env</h1>
      <p>{env}</p>
    </div>
  );
}
