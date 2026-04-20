import ModeToggle from '@/components/ModeToogle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Button>Sign In</Button>
      <Button variant="outline">Sign Up</Button>
      <ModeToggle />
    </div>
  );
}
