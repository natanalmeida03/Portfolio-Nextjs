import Link from 'next/link';
import CareerCard from './CareerCard';

const careerData = [
  {
    company: "Contexa",
    image: "/contexa.jpg",
    role: "IT Support",
    period: "Oct 2025 - Present",
    skills: ['BI', 'Python', 'Network'],
  }
];

function Job() {
  return (
    <section id="career" className="pb-11 pt-20 bg-bk3 dark:bg-bk1">
      <div className="mx-auto max-w-5xl">
         <Link href="#know"><h1 className="font-bold text-4xl text-pk dark:text-white mb-10 pl-4 md:pr-0">{'Career'}</h1></Link>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="md:hidden relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-[3px] bg-y" />
          
          <div className="flex flex-col gap-6 pl-8">
            {careerData.map((career, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 top-6 w-4 h-4 bg-y rounded-full border-[3px] border-bk3 dark:border-bk1 z-10" />
                <CareerCard
                  company={career.company}
                  image={career.image}
                  role={career.role}
                  period={career.period}
                  skills={career.skills}
                  position={index % 2 === 0 ? 'left' : 'right'}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <div className="flex gap-1.5 flex-col">
                <div className="w-2 h-2 bg-y rounded-full opacity-40" />
                <div className="w-2 h-2 bg-y rounded-full opacity-70" />
                <div className="w-2 h-2 bg-y rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-16 bottom-8 w-[3px] bg-y -translate-x-1/2" />

          <div className="relative flex flex-col gap-12">
            {careerData.map((career, index) => (
              <CareerCard
                key={index}
                company={career.company}
                image={career.image}
                role={career.role}
                period={career.period}
                skills={career.skills}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Job;