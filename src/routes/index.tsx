import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

import '@fontsource/nothing-you-could-do';
import '@fontsource/open-sans';
import '@fontsource/open-sans/700.css';

export default component$(() => {
  return (
    <>
      <section class="flex flex-col items-center justify-center gap-5 xl:gap-10">
        <header class="text-center">
          <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            The End Poem
          </h1>
          <h2 class="font-['Nothing_You_Could_Do'] font-normal text-2xl md:text-3xl xl:text-5xl">
            by Julian Gough
          </h2>
        </header>
        <form class="relative flex w-fit flex-col">
          <div class="peer h-12 border-b-2 transition-all duration-300 ease-in-out">
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
              class="h-full bg-transparent text-base capitalize outline-none"
            />
            <button
              type="submit"
              aria-label="submit"
              disabled
              class="h-full dark:fill-[#FBFBFB] fill-[#29292a] px-6 outline-none transition-all duration-300 ease-in-out focus:-translate-y-1 dark:disabled:fill-[#FBFBFB]/50 disabled:fill-[#29292a]/50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 16 16"
              >
                <path d="M15.9.1a.5.5 0 0 1 0 .6l-5.8 14.5a.8.8 0 0 1-1.3.2l-3.2-5-5-3.2a.8.8 0 0 1 .2-1.3L15.3 0a.5.5 0 0 1 .6.1Zm-9.3 10 2.8 4.3 4.7-11.8zm6.8-8.2L1.6 6.6l4.3 2.8 7.5-7.5Z"/>
              </svg>
            </button>
          </div>
          <label
            for="name"
            class="absolute transition-all duration-200 ease-in-out peer-focus-within:-top-2 peer-active:-top-2"
          >
            Name:
          </label>
        </form>
        <footer class="w-full absolute bottom-0 p-3 text-center text-sm opacity-60">
          <i>
            This website gather limited user data. To see how it's handled, visit the {" "}
            <Link class="underline underline-offset-2" href="https://github.com/ArthurSegato/TheEndPoem/#data-protection-legislations-gdpr-lgpd-and-others">
              project's repository
            </Link>.
          </i>
        </footer>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
