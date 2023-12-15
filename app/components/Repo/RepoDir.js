import Link from 'next/link';

const fetchRepoContent=async(name)=>{
    await new Promise((resolve) => setTimeout(resolve, 3000));

const response=await fetch(`https://api.github.com/repos/Dilkashpeshimam18/${name}/contents`,
{
    next: {
      revalidate: 60,
    },
  }
)
const content = await response.json();
return content;
}

const RepoDir = async({name}) => {
    const contents=await fetchRepoContent(name)
    const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
    <h3>Directories</h3>
    <ul>
      {dirs.map((dir) => (
        <li key={dir.path}>
          <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
        </li>
      ))}
    </ul>
  </>
  )
}

export default RepoDir