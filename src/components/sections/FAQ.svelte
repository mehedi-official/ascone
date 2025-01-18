<script lang="ts">
    import { plus } from "@components/Icons.svelte";
  import { slide } from "svelte/transition";

    let questions = $state([
        { id: 1, question: 'How sending a bank transfer?', answer: `Bank transfers electronically move money between accounts.You provide the recipient's bank details, and your bank sends the funds through secure networks.`, isActive: false },
        { id: 2, question: 'What is the scheduled payments feature?', answer: 'The scheduled payments feature allows you to manage all of your subscriptions or recurring payments in one place. This way, you can view details for every payment, which include the amount, frequency, payment dates etc.', isActive: true },
        { id: 3, question: 'How can I reactivate a terminated card?', answer: 'Contact our support centre immediately. Explain the situation and request clarification.', isActive: false },
        { id: 4, question: 'How about with a refund?', answer: 'Contact your bank to inquire about the specific procedures for receiving a refund on a terminated card.', isActive: false },
        { id: 4, question: 'How can I add money to my account?', answer: `You can add money to your bank account through various methods, Using your bank's mobile app to deposit checks by taking photos`, isActive: false }
    ]);
    let activatedIdx = $state(1);


  function handleClick(prevIdx: number, idx: number) {
    questions[prevIdx].isActive = false;
    questions[idx].isActive = !questions[idx].isActive;
    activatedIdx = idx;
  }
</script>


<div class="mx-24">
    <section class="content">
        <div>
            <strong class="text-sm/[14px] font-medium text-primary uppercase">FAQ</strong>
            <h2 class="text-[56px]/[120%] font-semibold text-black -tracking-[2px]">Frequently asked questions</h2>
        </div>
        <section>
            {#each questions as qna, idx}
                <div class={['border-b border-primary/10 pb-10', idx !== 0 && 'pt-10']}>
                    <button class="w-full flex gap-4 justify-between" onclick={() => handleClick(activatedIdx, idx)}>
                        <h3 class=" text-2xl/6 font-semibold text-secondary">{qna.question}</h3>
                        <span class={['transition-all text-[#e13145]', qna.isActive && 'rotate-45']}>{@render plus(!qna.isActive)}</span>
                    </button>
                    {#if qna.isActive}
                        <p transition:slide  class="mt-4 pr-8 text-base font-medium -tracking-[0.4px] text-gray-500">{qna.answer}</p>
                    {/if}
                </div>
            {/each}
        </section>
    </section>
</div>

<style>
    .content {
        display: grid;
        grid-template-columns: 8fr 9fr;
        gap: 1rem;
    }
</style>

