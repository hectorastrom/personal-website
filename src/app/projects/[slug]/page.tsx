export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Project: {params.slug}</div>;
}   
