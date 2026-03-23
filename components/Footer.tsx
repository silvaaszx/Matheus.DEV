import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Tem um projeto em mente?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                    Conteúdo e identidade visual: Matheus Silva.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
