function History() {
  return (
    <section className="pl-2">
      <h2 className="sr-only">틱택토 - 시간 여행 Go!</h2>
      <ol className="space-y-1">
        <li>
          <button
            type="button"
            className="grid place-content-center py-1 px-2 rounded-md bg-slate-800 text-slate-50 text-xs"
          >
            게임 시작!
          </button>
        </li>
        <li>
          <button
            type="button"
            className="grid place-content-center py-1 px-2 rounded-md bg-slate-800 text-slate-50 text-xs"
          >
            게임 #1 이동
          </button>
        </li>
      </ol>
    </section>
  );
}

export default History;
