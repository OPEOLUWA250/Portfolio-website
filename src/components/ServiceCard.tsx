interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-accent hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-accent mb-4">{title}</h3>
      <p className="text-light leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
