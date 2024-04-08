import * as React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Banner from "@/pages/(website)/home/_component/Banner";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

const HeaderTest = () => {
    const { data } = useQuery({
        queryKey: ["CATEGORY_LIST"],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/categories`
            );
            return data;
        },
    });
    console.log(data);

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuLink
                                className={
                                    (navigationMenuTriggerStyle(),
                                    "font-semibold text-xl p-3 uppercase")
                                }
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-semibold text-xl p-3 uppercase">
                            Shop
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
                                <ListItem
                                    key={"all"}
                                    title={"Tất cả sản phẩm"}
                                    href="/shop"
                                ></ListItem>
                                {data?.map((category: any) => (
                                    <ListItem
                                        key={category._id}
                                        title={category.name}
                                        href={`/categories/${category._id}`}
                                    ></ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/docs">
                            <NavigationMenuLink
                                className={
                                    (navigationMenuTriggerStyle(),
                                    "font-semibold text-xl p-3 uppercase")
                                }
                            >
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/docs">
                            <NavigationMenuLink
                                className={
                                    (navigationMenuTriggerStyle(),
                                    "font-semibold text-xl p-3 uppercase")
                                }
                            >
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={props.href || "/"}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none ">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});

export default HeaderTest;
