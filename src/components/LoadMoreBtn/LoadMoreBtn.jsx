export default function LoadMoreBut({ handleLoadMore }) {
  return (
    <div className="raw-for-load-more-but">
      <button className="load-more-but" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}
