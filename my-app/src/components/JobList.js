import { JobItem } from "./JobItem"
export function JobList ({jobs}) {
    return (
        <div>
          {jobs.map((job) => (
            <JobItem
              key={job.id}
              title={job.title}
              description={job.description}
              name={job.name}
              link={job.link}
            />
          ))}
        </div>
    )
}