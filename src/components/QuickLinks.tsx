import { ArrowRight, Info, MessageSquare, UserPlus, Users } from "lucide-react";


export const QuickLinksSection = () => {
    const quickLinks = [
        { name: 'What is the Greening Education Partnership?', description: 'Learn about our mission and goals.', href: 'https://www.unesco.org/en/sustainable-development/education/greening-future', icon: Info },
        // { name: 'Members', description: 'See the full list of our partners.', href: 'https://www.unesco.org/en/sustainable-development/education/greening-future/members', icon: Users },
        { name: 'Join the Greening Education Partnership', description: 'Become a part of the partnership.', href: 'https://forms.office.com/pages/responsepage.aspx?id=Uq5PHbM5-kuwswIpVrERlOo8vEWOIfFHtp-MDDNlsO5URTNOWEk5VUpGRFY4TVA1SU42WkRUVVM0WC4u&route=shorturl', icon: UserPlus },
        { name: 'Contact the Greening Education Partnership Secretariat', description: 'Get in touch with our team.', href: 'mailto:gep@unesco.org', icon: MessageSquare },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#004b45]">Get Involved & Learn More</h2>
                    {/* <p className="text-gray-600 mt-3">Quick access to key information and actions.</p> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quickLinks.map(link => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            target={link.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="group block bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-[#5DAE89] p-4 rounded-full">
                                    <link.icon className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#3A6A6D] mb-2">{link.name}</h3>
                            {/* <p className="text-sm text-gray-600 mb-4">{link.description}</p> */}
                            <span className="inline-flex items-center text-sm font-semibold text-[#5DAE89]">
                                Go <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
