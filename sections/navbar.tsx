import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
//   text?: string;
}

function Navbar({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  // text = "Made with",
  alt = "Made with deco.cx",
  height = 54,
  width = 220,
}: Props) {
  return (
    // <nav class="absolute w-full z-10">
    //     <div class="bg-nav hidden lg:block">
    //         <div class="container">
    //              <div class="flex justify-between">
    //                 <div class="flex">
    //                     <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Conheça a Unicesumar</a>
    //                     <a href="#" class="py-3 px-10 text-xs bg-[orange] text-white uppercase duration-300">Abra um polo</a>
    //                     <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Atendimento</a>
    //                     <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Canal de ética</a>
    //                     <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Trabalhe conosco</a>
    //                 </div>
    //                 <div class="flex">
    //                     <a href="#" class="py-3 px-7 text-[#9df] hover:text-white uppercase duration-300">botões de idiomas</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="bg-[#f5f8fa]">
    //         <div class="container py-3">
    //             <div class="flex justify-between items-center">
    //                 {/* <img src="{image}" width="220px" alt="" /> */}
    //                 {image && (
    //                   <Image
    //                     src={image || ""}
    //                     alt={alt || ""}
    //                     height={height || 20}
    //                     width={width || 50}
    //                   />
    //                 )}
    //                 <div class="menu-icon lg:hidden">
    //                     <svg width="24" height="24" viewBox="0 0 24 24">
    //                         <path d="M3 6h18M3 12h18M3 18h18" stroke="#1b1b1b" stroke-width="2" stroke-linecap="round" />
    //                     </svg>
    //                 </div>
    //                 <div class="menu-links hidden lg:flex justify-end items-end">
    //                     <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">
    //                         <span class="text-sm font-md text-[#07A7F8]">Educação</span> <br/>Presencial
    //                     </a>
    //                     <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">Medicina</a>
    //                     <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">
    //                         <span class="text-sm font-md text-[#07A7F8]">Educação</span> <br/>Distância
    //                     </a>
    //                     <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">
    //                         <span class="text-sm font-md text-[#07A7F8]">Cursos EAD</span> <br/>Engenharias
    //                     </a>
    //                     <a href="" class="bg-gradient-to-b from-[#ffb01c] to-[#ce9326] text-[#1b1b1b] w-full max-w-[200px] py-6 px-10 text-lg font-bold uppercase rounded-lg text-center flex items-center justify-center gap-6">
    //                         <div>
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    //                         </div>
    //                         Já sou aluno
    //                     </a>
    //                 </div>
    //             </div>
    //             <div class="mobile-menu hidden flex-col items-center">
    //                 <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Educação Presencial</a>
    //                 <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Medicina</a>
    //                 <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Educação Distância</a>
    //                 <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Cursos EAD Engenharias</a>
    //                 <a href="" class="bg-gradient-to-b from-[#ffb01c] to-[#ce9326] text-[#1b1b1b] w-full max-w-[200px] py-4 px-6 text-xs font-bold uppercase rounded-lg text-center flex items-center justify-center gap-6">
    //                     <div>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    //                     </div>
    //                     Já sou aluno
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
    <div class="absolute w-full z-10">
        <div class="bg-[#336d9f] bg-nav hidden xl:block">
            <div class="container">
                <div class="flex justify-between">
                    <div class="flex">
                        <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Conheça a Unicesumar</a>
                        <a href="#" class="py-3 px-10 text-xs bg-[orange] text-white uppercase duration-300">Abra um polo</a>
                        <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Atendimento</a>
                        <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Canal de ética</a>
                        <a href="#" class="py-3 px-10 text-xs text-[#9df] hover:text-white uppercase duration-300">Trabalhe conosco</a>
                    </div>
                    <div class="flex">
                        <a href="#" class="py-1 px-7 text-[#9df] hover:text-white uppercase duration-300">botões de idiomas</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-[#f5f8fa]">
                    <div class="flex-none xl:hidden">
                        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <a href={href} class="flex-1 px-2 mx-2">
                        {image && (
                            <Image
                                src={image || ""}
                                alt={alt || ""}
                                height={height || 54}
                                width={width || 220}
                            />
                        )}
                    </a> 
                    <div class="flex-none hidden xl:block">
                        <ul class="menu menu-horizontal items-end flex-nowrap">
                        {/* <li><a>Navbar Item 1</a></li>
                        <li><a>Navbar Item 2</a></li> */}
                            <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">
                                <span class="text-sm font-md text-[#07A7F8]">Educação</span> <br/>Presencial
                            </a>
                            <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">Medicina</a>
                            <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">
                                <span class="text-sm font-md text-[#07A7F8]">Educação</span> <br/>Distância
                            </a>
                            <a href="" class="text-[#1b1b1b] text-lg font-semibold uppercase px-10">
                                <span class="text-sm font-md text-[#07A7F8]">Cursos EAD</span> <br/>Engenharias
                            </a>
                            <a href="" class="bg-gradient-to-b from-[#ffb01c] to-[#ce9326] text-[#1b1b1b] w-full max-w-[230px] py-6 px-6 text-lg font-bold uppercase rounded-lg text-center flex items-center justify-center gap-6">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                </div>
                                Já sou aluno
                            </a>
                        </ul>
                    </div>
                </div>
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
                <ul class="menu p-4 w-80 min-h-full bg-base-200">
                    {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li> */}
                    <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Educação Presencial</a>
                    <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Medicina</a>
                    <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Educação Distância</a>
                    <a href="" class="text-[#1b1b1b] text-xs font-semibold uppercase py-2">Cursos EAD Engenharias</a>
                    <a href="" class="bg-gradient-to-b from-[#ffb01c] to-[#ce9326] text-[#1b1b1b] w-full max-w-[200px] py-4 px-6 text-xs font-bold uppercase rounded-lg text-center flex items-center justify-center gap-6">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        </div>
                        Já sou aluno
                    </a>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
