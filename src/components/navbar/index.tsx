import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Languages, Search, Twitter } from "lucide-react";
import { type FC, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Navbar: FC = () => {
	const [language, setLanguage] = useState("uz");

	return (
		<div className="w-[80%] m-auto">
			<div className="flex justify-between items-center h-[59px] p-[6px]">
				<div className="flex-1 flex gap-4 items-end h-[100%]">
					<img className="h-[100%]" src="/icons/logo.png" alt="Logo" />
					<h3>Kitob eng yaxshi - sovg'a</h3>
					<Button className="ml-10 pb-0" variant={"link"}>
						Qanday xarid qilinadi?
					</Button>
				</div>
				<div className="flex-1 flex gap-4 items-end justify-end">
					<AlertDialog>
						<AlertDialogTrigger>
							<Button variant={"ghost"}>
								<Search />
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Want to search books .?</AlertDialogTitle>
								<AlertDialogDescription>
									<Input type="search" placeholder="Search" />
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction>Search</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<Languages />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>Change Language</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={language}
								onValueChange={setLanguage}
							>
								<DropdownMenuRadioItem value="uz">UZ</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="ru">RU</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
					<Button variant="outline">+998777772565</Button>
					<Button variant="outline">
						<Facebook />
					</Button>
					<Button variant="outline">
						<Instagram />
					</Button>
					<Button variant="outline">
						<Twitter />
					</Button>
				</div>
			</div>
			<Separator />
		</div>
	);
};

export default Navbar;
