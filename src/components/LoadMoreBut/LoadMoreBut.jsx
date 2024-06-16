export default function LoadMoreBut({ setPage, page }) {
  function handleLoadMore() {
    setPage(page + 1);
  }

  return (
    <div className="raw-for-load-more-but">
      <button className="load-more-but" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}
