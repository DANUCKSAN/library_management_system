import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";


export default async function Home() {

  const session=await auth();
  return (
    <>

    {session && <h1 className="text-2xl font-semibold text-white">Welcome, {session.user?.name}</h1>}
     <BookOverview {...sampleBooks[0]}  />

     <BookList
     title='Popular Books'
     books={sampleBooks}
     containerClassName='mt-20'
     />

    </>
  );
}
