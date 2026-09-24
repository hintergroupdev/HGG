import { getLeadershipMembers } from "@/lib/sanityData";
import LeadershipClient from "./LeadershipClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function LeadershipPage() {
  const members = await getLeadershipMembers();
  return <LeadershipClient initialMembers={members} />;
}
