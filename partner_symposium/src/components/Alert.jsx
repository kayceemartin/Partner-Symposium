export default function Alert({message}) {
  return (
    <div className="alert" dangerouslySetInnerHTML={{__html: message}} >
    </div>
  );
}