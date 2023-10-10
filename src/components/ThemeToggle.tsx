const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      <input
        data-toggle-theme="corporate,night"
        data-act-class="ACTIVECLASS"
        type="checkbox"
      />
      <div className="swap-on text-4xl">🌚</div>
      <div className="swap-off text-4xl">🌞</div>
    </label>
  );
};

export default ThemeToggle;
