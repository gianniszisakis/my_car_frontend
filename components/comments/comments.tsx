interface CommentsProps {
  comments: string;
}
export default function Comments({ comments }: CommentsProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-4 mx-auto">
      <h1 className="text-xl font-bold text-center text-black-600">
        Παρατηρήσεις
      </h1>
      <p className="w-[300px] md:w-[500px] text-center">{comments}</p>
    </div>
  );
}
