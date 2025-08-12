type HelloCardProps = {
  name: string;
};

function HelloCard({ name }: HelloCardProps) {
  return <div>Hello {name}</div>;
}

export default HelloCard;
