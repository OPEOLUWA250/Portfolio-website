interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar = ({ skill, percentage }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-light font-semibold">{skill}</span>
        <span className="text-accent font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-accent h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
