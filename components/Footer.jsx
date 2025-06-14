import React from "react";
import Image from "next/image";
import Link from "next/link";

const socials = [
    {
        src: "/assets/footer/facebook.svg",
        path: "",
    },
    {
        src: "/assets/footer/instagram.svg",
        path: "",
    },
    {
        src: "/assets/footer/youtube.svg",
        path: "",
    },
    {
        src: "/assets/footer/x.svg",
        path: "",
    },
    {
        src: "/assets/footer/pinterest.svg",
        path: "",
    },
];

const Footer = () => {
    return (
        <footer className = "bg-accent bg-pattern bg-cover bg-blend-multiply pt-16">
            <div className = "container mx-auto border-b border-white/40">
                {/* text & form input & socials */}
                <div className = "flex flex-col max-w-[550px] mx-auto text-center">
                    {/* text */}
                    <div className = "mb-9">
                        <h2 className = "h2 mb-3">
                            Conecta con tus eventos
                        </h2>
                        <p className = "">
                            Suscríbete y recibe actualizaciones exclusivas y consejos de expertos sobre eventos.
                        </p>
                    </div>
                    {/* form */}
                    <form action = "/" className = "relative flex items-center mb-16">
                        <input type = "email" name = "email" id = "email" placeholder = "Correo electrónico" className = "pl-8 w-full h-[60px] rounded-full outline-none placeholder:text-primary/80 text-primary text-sm" />
                        <button className = "bg-secondary hover:bg-secondary-hover transition-all w-[114px] h-[52px] rounded-full text-sm uppercase absolute right-1">
                            Suscribirse
                        </button>
                    </form>
                    {/* socials */}
                    <div className = "mb-[72px] flex gap-8 mx-auto">
                        {socials.map((icon, index) => {
                            return <Link href = {icon.path} key = {index} className = "relative w-[20px] h-[20px]">
                                <Image src = {icon.src} fill alt = "socials" />
                            </Link>
                        })}
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className = "py-8">
                <div className = "container mx-auto">
                    <div className = "flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* logo */}
                        <Link href = "/" className = "relative flex w-[78px] h-[30px]">
                            <Image src = "/assets/footer/logo.svg" fill alt = "logo" />
                        </Link>
                        <p className = "text-sm">
                            Copyright &copy; 2025 <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold">carlozzsilva10</a>. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;