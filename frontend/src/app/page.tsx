"use client"
import Button from "@/components/ui/Button";
import SearchInput from "@/components/ui/SearchInput";
import UserList from "@/components/UserList";
import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";


export default function Home() {
  const router = useRouter()

  return (
    <div className="w-full ">
      <div className="p-10 space-y-4">
        <h1 className="text-3xl font-bold">Configuration</h1>
        <SearchInput placeholder="Vous cherchez quel utilisateur ..." />
        <Button handleClick={() => router.push('/users/add')} text="Ajouter un utilisateur"
          icon={<AiOutlinePlus />}
        />
        <UserList />
      </div>
    </div>
  );
}
