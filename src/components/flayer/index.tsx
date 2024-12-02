import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, User, WalletCards } from "lucide-react";
import type { FC } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const Flayer: FC = () => {
	return (
		<div className="w-[80%] m-auto mt-4">
			<div className="flex justify-between items-center">
				<div className="flex-1 flex-gap-4 items-end">
					<Button variant={"link"}>Kitoblar</Button>
					<Button variant={"link"}>To'lamlar</Button>
					<Button variant={"link"}>Mualliflar</Button>
					<Button variant={"link"}>Chegirmalar</Button>
				</div>
				<div className="flex-1 flex gap-2 items-center justify-end">
					<Button
						className="flex gap-2"
						variant={"outline"}
						onClick={() => {
							toast("Event has created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							});
						}}
					>
						<WalletCards /> Savatcha
					</Button>
					<Button
						className="flex gap-2"
						variant={"outline"}
						onClick={() => {
							toast("Event has created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							});
						}}
					>
						<Heart />
						evimlilar
					</Button>
					<Button
						className="flex gap-2"
						variant={"outline"}
						onClick={() => {
							toast("Event has created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							});
						}}
					>
						<User />
						Profile
					</Button>
				</div>
			</div>
			<div className="flex gap-4 h-[488px] mt-4">
				<div className="w-[287px] bg-[#f5f5f5] rounded-sm flex flex-col gap-2 items-start">
					<Button variant={"link"}>Badiiy Adabiyotlar</Button>
					<Button variant={"link"}>Bolalar Adabiyotlari</Button>
					<Button variant={"link"}>O'quv Adabiyotlari</Button>
					<Button variant={"link"}>Diniy Adabiyotlar</Button>
					<Button variant={"link"}>Ilmiy Ommabop</Button>
					<Button variant={"link"}>Psixologiya</Button>
					<Button variant={"link"}>Biznes adabiyot</Button>
					<Button variant={"link"}>Oila uchun</Button>
					<Button variant={"link"}>She'riy</Button>
					<Button variant={"link"}>Barcha janrlar</Button>
				</div>
				<div className="w-full h-full rounded-sm flex justify-end">
					<Carousel className="w-[95%]">
						<CarouselContent className="h-[488px]">
							<CarouselItem>
								<img
									src="/images/Photo 1.jpg"
									className="w-full"
									alt="Random images"
								/>
							</CarouselItem>
							<CarouselItem>
								<img
									src="/images/Photo 2.jpg"
									className="w-full h-full"
									alt="Random images"
								/>
							</CarouselItem>
							<CarouselItem>
								<img
									src="/images/Photo 3.jpg"
									className="w-full"
									alt="Random images"
								/>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Flayer;
