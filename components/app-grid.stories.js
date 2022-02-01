export default {
  title: 'Components/App-grid',
};

export const Default = () => `
<div class="app-grid h-500">
  <header class="bg-pink">top</header>
  <main class="bg-blue app-grid__scrollarea">
    <div class="h-100vh">scroll me</div>
  </main>
  <nav class="bg-coral">bottom</nav>
</div>
`;
