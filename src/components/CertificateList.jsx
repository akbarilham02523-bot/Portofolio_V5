import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Certificate from "./Certificate";

const DEFAULT_CERTIFICATES = [{ id: "fallback-sertifikat", Img: "/sertifikat1.jpg" }];

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchCertificates = async () => {
      setLoading(true);
      setIsFallback(false);

      try {
        const { data, error } = await supabase
          .from("certificates")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        if (!data || data.length === 0) {
          if (mounted) {
            setCertificates(DEFAULT_CERTIFICATES);
            setIsFallback(true);
          }
        } else {
          if (mounted) {
            setCertificates(data);
            setIsFallback(false);
          }
        }
      } catch (fetchError) {
        console.error("Certificate fetch failed:", fetchError);
        if (mounted) {
          setCertificates(DEFAULT_CERTIFICATES);
          setIsFallback(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchCertificates();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Certificate Gallery</h2>
        <p className="mt-2 text-sm text-gray-400">
          {loading
            ? "Memuat sertifikat dari Supabase..."
            : isFallback
            ? ""
            : "Menampilkan sertifikat yang diambil dari Supabase."}
        </p>
      </div>

      {loading ? (
        <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/10">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-violet-500 border-t-transparent animate-spin" />
            <span className="text-sm text-gray-300">Loading certificates...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((certificate) => (
            <div key={certificate.id ?? certificate.Img} className="transition-transform duration-300 hover:-translate-y-1">
              <Certificate ImgSertif={certificate.Img} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificateList;
