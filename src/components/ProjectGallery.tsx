import React, { useState } from 'react';
import { ArrowUpRight, SlidersHorizontal, MapPin, Clock, Hammer } from 'lucide-react';
import { PROJECTS } from '../data/roofingData';
import { ProjectItem } from '../types';

interface ProjectGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onExploreMore: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onSelectProject,
  onExploreMore,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [beforeAfterToggle, setBeforeAfterToggle] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Commercial', 'Residential', 'Metal', 'Restoration'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const toggleBeforeAfter = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBeforeAfterToggle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className="py-8 sm:py-14 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm border border-neutral-200/60 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-100">
          
          {/* Left Side: Kicker, Heading, & Description */}
          <div className="space-y-4 max-w-xl">
            <div className="text-xs sm:text-sm font-semibold text-[#F95700] tracking-wider">
              --- Selected Projects
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight leading-[1.3]">
              Explore Our Roofing Projects
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              We want to be your top choice for roofing by prioritizing quality, being honest, and ensuring our customers are happy.
            </p>
          </div>

          {/* Right Side: Learn More Button */}
          <div className="flex lg:justify-end">
            <button
              onClick={onExploreMore}
              className="group inline-flex items-center gap-2.5 bg-[#F95700] hover:bg-[#E04E00] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Learn More</span>
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {filteredProjects.map((project, index) => {
            const isShowingBefore = project.beforeImage && beforeAfterToggle[project.id];
            const currentImg = isShowingBefore ? project.beforeImage : project.image;
            
            // Asymmetric visual weight: alternate aspect ratios like an editorial lookbook
            const isTallCard = index === 0 || index === 5;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col space-y-3 transition-transform duration-300 hover:-translate-y-1 ${
                  isTallCard ? 'md:row-span-2' : ''
                }`}
              >
                {/* Image Container with rounded corners */}
                <div
                  className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/60 ${
                    isTallCard ? 'aspect-[3/4] lg:aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={currentImg}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim & Hover Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-neutral-300">
                        <MapPin className="w-3.5 h-3.5 text-[#F95700]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-neutral-300">
                        <Clock className="w-3.5 h-3.5 text-[#F95700]" />
                        <span>Completed in {project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-neutral-300">
                        <Hammer className="w-3.5 h-3.5 text-[#F95700]" />
                        <span className="truncate">{project.material}</span>
                      </div>
                    </div>
                  </div>

                  {/* Before / After Toggle Button for Restoration Projects */}
                  {project.beforeImage && (
                    <button
                      onClick={(e) => toggleBeforeAfter(project.id, e)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-md hover:bg-white text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3 h-3 text-[#F95700]" />
                      <span>{isShowingBefore ? 'View After' : 'View Before'}</span>
                    </button>
                  )}

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {project.category}
                  </div>
                </div>

                {/* Typography Metadata Below Card */}
                <div className="space-y-1">
                  <span className="text-xs text-neutral-400 font-medium tracking-wide">
                    {project.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-neutral-900 group-hover:text-[#F95700] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};