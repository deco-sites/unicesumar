import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
//   href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  // text?: string;
}

function Navbar({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  // href = "https://deco.cx/",
  // text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    
    <div class="flex flex-col lg:flex-row min-h-screen">
        <div class="basis-full lg:basis-1/3 relative mt-10 lg:mt-0">
            <div class="min-h-full min-w-full aspect-video relative lg:absolute top-0 left-[50%] translate-x-[-50%]">
                {image && (
                <Image
                    src={image || ""}
                    alt={alt || ""}
                    // height={height || 20}
                    // width={width || 50}
                />
                )}
            </div>
            <div class="absolute top-0 w-full h-full bg-gradient-to-b from-[#00093ad1] to-[#00093a61] flex flex-col justify-center items-center gap-10 h-full py-[100px]">
                <img src="/img/index/estrelas-igc.webp" width="160px" alt="" />
                <h1 class="text-md font-bold text-center text-white">Nota máxima do MEC <br /> <span class="font-medium">(Conceito Institucional 5)</span></h1>
            </div>
        </div>
        <div class="relative basis-full lg:basis-2/3 font-['rubik'] xl:pb-[100px] lg:pb-0 pt-10 bg-white">
            <div class="flex flex-col items-center justify-center h-full px-4">
                <h4 class="text-3xl text-center block italic text-[#757575] mb-10">O que você procura?</h4>
                <div class="flex flex-col md:flex-row gap-6 items-stretch">
                    <div class="flex flex-col w-full lg:max-w-[240px] gap-6 bg-[#130e64] rounded-lg p-6">
                        <p class="text-md font-bold text-white uppercase">Educação a Distância</p>
                        <a href="" class="bg-gradient-to-b from-[#46c07a] to-[#3a9b67] py-6 px-1 rounded-lg text-md text-center text-white font-bold">Inscreva-se</a>
                        <p class="text-md font-bold uppercase text-[#ffb01c]">Acesso rápido</p>
                        <div class="grid gap-1">
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Cursos de Graduação
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Pós-graduação
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Profissionalizantes
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Técnicos
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Polos
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Acesse o Site
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col w-full lg:max-w-[240px] gap-6 bg-gradient-to-b from-[#fff] to-[#f2f2f2] border border-[#eeeeee] rounded-lg p-6">
                        <p class="text-md font-bold text-[#636363] uppercase">Educação presencial ou digital</p>
                        <a href="" class="bg-gradient-to-b from-[#46c07a] to-[#3a9b67] py-6 px-1 rounded-lg text-md text-center text-white font-bold">Inscreva-se</a>
                        <p class="text-md font-bold uppercase text-[#1d3e91]">Acesso rápido</p>
                        <div class="grid gap-1">
                            <a href="" class="flex items-center gap-2 text-[#747474] text-sm hover:text-[#444444] duration-300">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#747474"/></svg>
                                </div>
                                Vestibular Verão 2024
                            </a>
                            <a href="" class="flex items-center gap-2 text-[#747474] text-sm hover:text-[#444444] duration-300">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#747474"/></svg>
                                </div>
                                Cursos de <span class="text-[#130e64]">Graduação</span>
                            </a>
                            <a href="" class="flex items-center gap-2 text-[#747474] text-sm hover:text-[#444444] duration-300">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#747474"/></svg>
                                </div>
                                Curso de Medicina
                            </a>
                            <a href="" class="flex items-center gap-2 text-[#747474] text-sm hover:text-[#444444] duration-300">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#747474"/></svg>
                                </div>
                                Pós-graduação Digital*
                            </a>
                            <a href="" class="flex items-center gap-2 text-[#747474] text-sm hover:text-[#444444] duration-300">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#747474"/></svg>
                                </div>
                                Acesse o site
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col w-full lg:max-w-[240px] gap-6 bg-[#130e64] rounded-lg p-6">
                        <p class="text-md font-bold text-white uppercase">Mestrado e doutorado</p>
                        <a href="" class="bg-gradient-to-b from-[#46c07a] to-[#3a9b67] py-6 px-1 rounded-lg text-md text-center text-white font-bold">Inscreva-se</a>
                        <p class="text-md font-bold uppercase text-[#ffb01c]">Acesso rápido</p>
                        <div class="grid gap-1">
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Direito
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Promoção da Saúde
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Tecnologias Limpas
                            </a>
                            <a href="" class="flex items-center gap-2 text-white text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" fill="#ffffff"/></svg>
                                </div>
                                Gestão do Conhecimento nas Organizações
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-center items-center gap-3 mt-10 lg:mt-0 relative lg:absolute bottom-0 w-full py-3 border-t border-[#ececec]">
                <p class="text-md font-bold uppercase">Institucional</p>
                <a href="" class="text-lg font-semibold">Mestrado e Doutorado</a>
                <p class="hidden lg:block">|</p>
                <a href="" class="text-lg font-semibold">Extensão</a>
                <p class="hidden lg:block">|</p>
                <a href="" class="text-lg font-semibold">Pesquisa</a>
                <p class="hidden lg:block">|</p>
                <a href="" class="text-lg font-semibold">ICETI</a>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
