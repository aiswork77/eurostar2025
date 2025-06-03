"use client";

import { useState } from "react";

export default function BugTracker() {
  // State for sign-in form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for bug report form
  const [bugTitle, setBugTitle] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [status, setStatus] = useState("Open");
  const [description, setDescription] = useState("");
  // Static bug reports
  const bugReports = [
    {
      title: "Login button not responding",
      description: "When clicking the login button, nothing happens. Expected to redirect to dashboard.",
      severity: "High",
      status: "In Progress",
      progress: 25,
      date: "Jan 15, 2024, 10:30 AM",
    },
    {
      title: "Page loading slowly",
      description: "The main dashboard takes over 10 seconds to load. Should load within 2-3 seconds.",
      severity: "Medium",
      status: "Testing",
      progress: 75,
      date: "Jan 15, 2024, 09:15 AM",
    },
  ];
  // Status summary
  const statusSummary = [
    { label: "Open", color: "red-100", text: "red-500", count: 0 },
    { label: "In Progress", color: "blue-100", text: "blue-500", count: 1 },
    { label: "Testing", color: "purple-100", text: "purple-500", count: 1 },
    { label: "Resolved", color: "green-100", text: "green-500", count: 0 },
    { label: "Closed", color: "gray-100", text: "gray-500", count: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Bug Tracker</h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-xl">
        Report and track bugs efficiently. Submit detailed bug reports with severity levels to help prioritize fixes and improve software quality.
      </p>

      {/* Main Card Section */}
      <div className="w-full max-w-md mx-auto mb-8">
        {/* Sign In Card */}
        <div className="bg-white rounded-xl shadow p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
          <p className="text-gray-600 text-center mb-6">Sign in to add comments</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="w-full bg-gray-900 text-white py-2 rounded font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              <span className="inline-block">→</span> Sign In
            </button>
          </form>
          <p className="text-center text-sm text-blue-600 mt-4">
            Don&apos;t have an account? <a href="#" className="underline">Sign up</a>
          </p>
        </div>
      </div>

      {/* Bug Report Form */}
      <div className="w-full max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🐞</span>
            <h2 className="text-xl font-bold">Report New Bug</h2>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter a brief description of the bug"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={bugTitle}
              onChange={e => setBugTitle(e.target.value)}
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Severity Level</label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  value={severity}
                  onChange={e => setSeverity(e.target.value)}
                >
                  <option value="Low">🟢 Low</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="High">🔴 High</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="Open">🔴 Open</option>
                  <option value="In Progress">🟡 In Progress</option>
                  <option value="Testing">🟣 Testing</option>
                  <option value="Resolved">🟢 Resolved</option>
                  <option value="Closed">⚪ Closed</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Detailed Description</label>
              <textarea
                rows={3}
                placeholder="Provide a detailed description of the bug, including steps to reproduce, expected behavior, and actual behavior..."
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                className="flex-1 bg-gray-900 text-white py-2 rounded font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              >
                <span className="inline-block">📄</span> Submit Bug Report
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded font-medium hover:bg-gray-200 transition"
                onClick={() => {
                  setBugTitle("");
                  setSeverity("Medium");
                  setStatus("Open");
                  setDescription("");
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bug Reports Section */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🐞</span>
          <h2 className="text-xl font-bold">Bug Reports</h2>
          <span className="ml-2 text-sm text-gray-500">{bugReports.length} total</span>
        </div>
        {/* Status Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
          {statusSummary.map((s) => (
            <div key={s.label} className={`rounded-lg py-3 text-center bg-${s.color}`}>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-${s.color} text-${s.text} mb-1`}>
                {s.label}
              </span>
              <div className="text-2xl font-bold text-gray-900">{s.count}</div>
            </div>
          ))}
        </div>
        {/* Bug Report Cards */}
        <div className="space-y-6">
          {bugReports.map((bug, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-700 mr-2">
                    {bug.severity}
                  </span>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${bug.status === "In Progress" ? "bg-blue-100 text-blue-700" : bug.status === "Testing" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
                    {bug.status}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{bug.title}</h3>
              <p className="text-gray-700 mb-4">{bug.description}</p>
              <div className="mb-2">
                <span className="block text-xs text-gray-500 mb-1">Progress</span>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-900 h-2 rounded-full" style={{ width: `${bug.progress}%` }} />
                </div>
                <span className="text-xs text-gray-500 mt-1 inline-block">{bug.progress}%</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {bug.date}
                </span>
                <button className="flex items-center gap-1 text-gray-700 border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  View Details & Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
