import { Frown } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <h1 className="text-3xl font-bold">
        Sorry, I haven’t built my portfolio yet!
      </h1>
      <Frown size={60} className="text-red-500" />
    </div>
  );
}
