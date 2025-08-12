import './GithubCard.css';

interface GithubCardProps {
  id: number;
  name: string;
  url: string;
  image: string;
}

const GithubCard = ({ id, name, url, image }: GithubCardProps) => {
  return (
    <div key={id} className='avatar-card'>
      <img src={image} alt={`${name}'s avatar`} className='avatar-image' />
      <div className='avatar-name'>{name}</div>
      <div className='avatar-id'>ID: {id}</div>
      <a href={url} target='_blank' rel='noopener noreferrer' className='avatar-link'>
        View Profile
      </a>
    </div>
  );
};

export default GithubCard;
