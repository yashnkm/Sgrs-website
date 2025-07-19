import React from 'react';

const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "Cleanroom for a biotech company.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbYO3_W9UBnTmp-kVbUpiQCF8TS5qDCoTg9fX5ItIcAiAlXZwn5isqLSzlJdAPnAtGIFNM_W1QAfBIIPxQrzlnyfNV4P0zCU8Q-qhjagx92XRKZKIF_8yTsHBs7voEAMwvSIpw5hXJfoJ-0huHBdOiEQScWlTU-BMVpbetbNrXuHpJ6mAaXsK5oKs4Lu73jcj3pH2eVjpPIKgq7Ac4nYCvmQ93F86DveiuoxMsgq8eoSRtmdoPoLWlBcPFiDioOZ4658hKTyMNdyA"
    },
    {
      title: "Project Beta",
      description: "HVAC upgrade for a manufacturing plant.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDud14b3XF9QXt0TVY_xotif7naUpKZcrIzN4zV4RUFVoMI6FS61oTc03rgrCVKfRtUtqeAtLZ8hYDY00wco_vIjWfRQcwiQHUhNj7HhU_N0a8lsCJQbEWoI_XObKFfE4LDs92Ad0YRxnvsY8b3BC2856dA8QU3qYRlP4s7t6mLsInMPTlEccH_YuO4a4TkDptQY_1ar1U7IHljjPZB1PK71sGzci7tLTDaUup49GRMw-JCcymSkfKwvc11m92nwkpdNHsNOeoVCi0"
    },
    {
      title: "Project Gamma",
      description: "Modular cleanroom for a pharma facility.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyhcjKTVu5iVP_IEYWAtb-rtbXT737FZIFjzY59Cc3YdMlberVefQwLQoODfy6JgF9o7kMBRoCqtid86kXLPZ6iqdFGE9DXSIMW4tx5KLvmjRmVrDB26Fr-emRr232k5w-1lbHfMu0wQqXzFEzUA_Q_Tayzh4z_xjtZQdW3cPwPK9y6LtG7M1mj7lVX_zWsPb9vAAIGT2nmrfHHysGIoWGaf2Wsjp6NXAR3LOrc9aJczns9CGzmyeI-nct3pyVjpRdSJIHF0EAeSw"
    },
    {
      title: "Project Delta",
      description: "Cooling tower for a chemical plant.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9o12NprHIEbb4CUVJiEBaJrd9uUKVX3tk-iBqV3QWq6xU5f_MOW8uNMvMWpoc6XEXydz13zY9q9HxwrIir8GHbdpGscXv4QYGBdr0UWhhPfYqUc90gqhWdS6t_JmwrunewbYMNAF4Wje3dMcxHks7LEAn7y6HGgbwy3frEkdGot-qs-QkDPd8cbwvppuzqMocYpOc3MX-BaMBBh_Oty4MiS8UAI5uzYoNGtROk0tBSsRs9Ka0pulEhBrp5CJf9gDGtzI60uLgUMA"
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Projects Showcase</h2>
          <p className="mt-2 text-lg text-slate-600">A glimpse into our successful installations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img 
                alt={project.title}
                className="w-full h-48 object-cover" 
                src={project.image}
              />
              <div className="p-4">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{project.description}</p>
                <a className="text-sm font-semibold text-blue-600 mt-3 inline-block hover:text-orange-600" href="#">
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;