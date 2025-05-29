import React from "react";
interface Lead {
  id: string;
  status: "cold" | "warm" | "hot";
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyWebsite: string;
  city: string;
  leadSource: string;
}

// Mock data with more entries
const mockLeads: Lead[] = [{
  id: "1",
  status: "hot",
  name: "John Doe",
  email: "john@example.com",
  phone: "(555) 123-4567",
  jobTitle: "CEO",
  companyName: "Tech Corp",
  companyAddress: "123 Main St",
  companyPhone: "(555) 987-6543",
  companyWebsite: "www.techcorp.com",
  city: "San Francisco",
  leadSource: "Website"
}, {
  id: "2",
  status: "warm",
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "(555) 234-5678",
  jobTitle: "CTO",
  companyName: "Innovation Labs",
  companyAddress: "456 Tech Ave",
  companyPhone: "(555) 876-5432",
  companyWebsite: "www.innovationlabs.com",
  city: "New York",
  leadSource: "LinkedIn"
}, {
  id: "3",
  status: "cold",
  name: "Bob Wilson",
  email: "bob@example.com",
  phone: "(555) 345-6789",
  jobTitle: "Director",
  companyName: "Future Systems",
  companyAddress: "789 Future St",
  companyPhone: "(555) 765-4321",
  companyWebsite: "www.futuresystems.com",
  city: "Chicago",
  leadSource: "Conference"
}];
interface CRMTableProps {
  selectedState: string | null;
}
export function CRMTable({
  selectedState
}: CRMTableProps) {
  return <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Job Title</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Address</th>
            <th className="p-3 text-left">Company Phone</th>
            <th className="p-3 text-left">Website</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Source</th>
          </tr>
        </thead>
        <tbody>
          {mockLeads.map(lead => <tr key={lead.id} className="border-b hover:bg-accent/50">
              <td className="p-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${lead.status === "hot" ? "bg-red-100 text-red-800" : lead.status === "warm" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
              </td>
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.phone}</td>
              <td className="p-3">{lead.jobTitle}</td>
              <td className="p-3">{lead.companyName}</td>
              <td className="p-3">{lead.companyAddress}</td>
              <td className="p-3">{lead.companyPhone}</td>
              <td className="p-3">{lead.companyWebsite}</td>
              <td className="p-3">{lead.city}</td>
              <td className="p-3">{lead.leadSource}</td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}