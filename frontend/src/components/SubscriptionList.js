import React, { useState, useEffect } from "react";
import { SubscribeAPI } from "../api/subscribe";

function SubscriptionList() {
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubs] = useState([]);

  const getSubs = () => {
    SubscribeAPI.getAll().then((response) => {
      setSubs(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSubs();
    return () => {
      setSubs([]);
    };
  }, []);

  return (
    <div>
      {subscriptions.length > 0 || !loading ? (
        <div className="overflow-x-auto">
          <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Email</th>
                      <th className="py-3 px-6 text-left">Age</th>
                      <th className="py-3 px-6 text-left">Created At</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {subscriptions.map((sub, key) => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{sub.email}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{sub.age}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">
                              {sub.created_on}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading... </div>
      )}
    </div>
  );
}

export default SubscriptionList;
