import { Genres } from "@/types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
  


async function GenreDropDown() {

    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options: RequestInit = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24,
        }
    };

    const response = await fetch(url, options)
    const data = (await response.json()) as Genres

  return (
    <DropdownMenu >
        <DropdownMenuTrigger>
            <DropdownMenuLabel className="flex items-center max-sm:hidden">
                Genres
                <ChevronDown className="ml-1" />
            </DropdownMenuLabel>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuLabel className="font-medium">Select Genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data.genres.map(genre => (
                <DropdownMenuItem key={genre.id} asChild>
                    <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                     {genre.name}
                    </Link>
                    
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default GenreDropDown
