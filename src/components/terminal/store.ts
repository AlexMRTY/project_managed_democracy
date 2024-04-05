import { create } from 'zustand'
import { Queue } from '@/lib/queue'


type StratagemQueueStore = {
    queue: Queue<string>;
    enqueue: (stratagem: string) => void;
    dequeue: () => string;
}

// export const useStratagemQueueStore = create<StratagemQueueStore>((set) => ({
//     queue: new Queue<string>(),
//     enqueue: (stratagem) => set((state) => ({ 
//         state.queue.enqueue(stratagem)
//     })),
//     dequeue: () => {
//         set((state) => {
//             queue: state.queue.dequeue()
//         });
//     },
// }));
