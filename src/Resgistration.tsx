export default function Resgistration() {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    alert("!!");
  };

  return (
    <form
      className="flex flex-col align-middle w-full"
      action={"#"}
      onSubmit={submitHandler}
    >
      <input name="team_name" type="text" placeholder="팀 명을 입력하세요.." />
      <button> 등록하기! </button>
    </form>
  );
}
