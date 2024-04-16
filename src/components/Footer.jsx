import React from 'react';


function Footer () {
    return (
        <footer class="bg-secondary w-h-full">
            <div class="max-w-screen-xl px-24 py-16 mx-auto sm:px-6 ">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class=" grid grid-cols-2 gap-8 xs:grid-cols-1 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                        <h4 class="text-2xl font-extralight">
                            Adresse:
                        </h4>
                        <section class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <p>Intet nyt - Godt nyt ApS</p>
                            <br />
                            <p>Tulipanvej 232</p>
                            <p>7320</p>
                            <p>Valby Øster</p>
                        </section>
                        </div>
                        <div>
                        <h4 class="text-2xl font-extralight">
                            Links
                        </h4>
                        <section class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a href='https://www.vikanweb.dk'>vikanweb.dk</a>
                            <a href='https://www.overpådenandenside.dk'>overpådenandenside.dk</a>
                            <a href="https://www.retsinformation.dk">retsinformation.dk</a>
                            <a href="https://www.nogetmednews.dk">nogetmednews.dk</a>
                        </section>
                        </div>
                        <div>
                        <h4 class="text-2xl font-extralight">
                            Politik
                        </h4>
                        <section class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a className='text-decoration-line: none;' class="hover:opacity-75 cursor-pointer" href="#">Privatlivspolitik</a>
                            <a class="hover:opacity-75 cursor-pointer" href="#">Cookiepolitik</a>
                            <a class="hover:opacity-75 cursor-pointer" href="#">Købsinformation</a>
                            <a class="hover:opacity-75 cursor-pointer" href="#">Delingspolitik</a>
                        </section>
                        </div>
                        <div>
                        <h4 class="text-2xl font-extralight">
                            Kontakt
                        </h4>
                        <section class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a class="hover:opacity-75 cursor-pointer" href="#">ingn@nyhed.dk</a>
                            <a class="hover:opacity-75 cursor-pointer" href="#">teletfon: 23232323</a>
                            <a class="hover:opacity-75 cursor-pointer" href="#">fax: 123123-333</a>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;