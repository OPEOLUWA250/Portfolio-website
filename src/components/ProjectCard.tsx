interface ProjectCardProps {
  title: string;
  description?: string;
  image?: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg bg-gray-800 hover:shadow-2xl transition-all duration-300"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
        {description && <p className="text-light text-sm">{description}</p>}
        <div className="mt-4 text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
          CHECK IT OUT →
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
